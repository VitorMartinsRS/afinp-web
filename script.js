/* AFINP Finance: interações de navegação e demonstração.
   Nenhum pagamento ou chamada de IA é realizado por este site. */

// Menu responsivo
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function closeMenu() {
  mainNav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
}

menuButton?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 800) closeMenu();
});

// Planos: público e periodicidade de cobrança.
// Para alterar preços, edite os atributos data-month/data-year no index.html.
const audienceButtons = [...document.querySelectorAll('[data-audience]')];
const planGroups = [...document.querySelectorAll('[data-plan-group]')];
const billingButtons = [...document.querySelectorAll('[data-billing]')];
const businessYearNote = document.querySelector('.pricing-footnote');

function selectAudience(selected) {
  audienceButtons.forEach(button => {
    const active = button.dataset.audience === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  planGroups.forEach(group => { group.hidden = group.dataset.planGroup !== selected; });
  // O preço anual de Business não foi definido no planejamento.
  billingButtons.forEach(button => { button.disabled = selected === 'business'; });
  document.querySelector('.billing-switch')?.classList.toggle('is-disabled', selected === 'business');
  if (businessYearNote) {
    businessYearNote.textContent = selected === 'business'
      ? 'Valor mensal ilustrativo. O preço anual do Afinp Business ainda não foi definido. Todos os planos e funcionalidades estão sujeitos a validação antes do lançamento.'
      : '* Limites de perguntas são propostas. Os planos familiares compartilham a franquia. Todos os valores são sugestões de planejamento — não ofertas disponíveis para compra. A periodicidade anual corresponde a uma cobrança por ano.';
  }
}

audienceButtons.forEach(button => button.addEventListener('click', () => selectAudience(button.dataset.audience)));

function selectBilling(selected) {
  billingButtons.forEach(button => {
    const active = button.dataset.billing === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-month][data-year]').forEach(el => {
    el.textContent = el.dataset[selected];
  });
}

billingButtons.forEach(button => button.addEventListener('click', () => {
  if (!button.disabled) selectBilling(button.dataset.billing);
}));

// Janela de demonstração do paywall, sem cobrança.
const paywall = document.querySelector('#paywall-dialog');
const openPaywallButtons = document.querySelectorAll('[data-open-paywall]');
const closePaywall = document.querySelector('.dialog-close');
const keepFree = document.querySelector('#dialog-free');
const toPlans = document.querySelector('#dialog-to-plans');

function showPaywall() {
  if (!paywall) return;
  if (typeof paywall.showModal === 'function') {
    paywall.showModal();
    document.body.classList.add('dialog-open');
  } else {
    window.location.hash = '#planos';
  }
}
function hidePaywall() {
  if (paywall?.open) paywall.close();
  document.body.classList.remove('dialog-open');
}
openPaywallButtons.forEach(button => button.addEventListener('click', showPaywall));
closePaywall?.addEventListener('click', hidePaywall);
keepFree?.addEventListener('click', hidePaywall);
toPlans?.addEventListener('click', () => {
  hidePaywall();
  selectAudience('individual');
});
paywall?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
paywall?.addEventListener('click', event => {
  if (event.target === paywall) hidePaywall();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Estado inicial sincronizado com o HTML.
selectAudience(document.querySelector('[data-audience].active')?.dataset.audience || 'individual');
selectBilling(document.querySelector('[data-billing].active')?.dataset.billing || 'month');
// Corrige o botão "Voltar ao início"
const backToTop = document.querySelector('#back-to-top');

backToTop?.addEventListener('click', function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  // Garante que a URL não fique presa em outra seção
  history.replaceState(null, '', window.location.pathname + window.location.search);
});
