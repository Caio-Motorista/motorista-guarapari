/* =====================================================
   whatsapp-ai.js
   Assistente guiado em 5 passos. Coleta dados do
   passageiro e abre o WhatsApp com mensagem pronta.
   ===================================================== */
(function(){
  'use strict';

  const PHONE = '5527999849371';
  const modal = document.getElementById('aiModal');
  const stepEl = document.getElementById('aiStep');
  const bar = document.getElementById('aiBar');
  const btnNext = document.getElementById('aiNext');
  const btnBack = document.getElementById('aiBack');
  const btnClose = document.getElementById('aiClose');

  if (!modal) return;

  const STEPS = [
    {
      key:'tipo',
      title:'Que tipo de corrida você precisa?',
      type:'choice',
      options:[
        'Transfer aeroporto Vitória → Guarapari',
        'Transfer Guarapari → aeroporto Vitória',
        'Corrida particular em Guarapari / Grande Vitória',
        'Viagem longa (BH, Rio, SP, outras)',
        'Festa, show ou evento',
        'Outro'
      ]
    },
    {
      key:'origem_destino',
      title:'Origem e destino',
      type:'text',
      placeholder:'Ex: Aeroporto de Vitória → Praia do Morro, Guarapari'
    },
    {
      key:'data_hora',
      title:'Data e horário',
      type:'text',
      placeholder:'Ex: 12/06/2026 às 14h30 (chegada do voo)'
    },
    {
      key:'passageiros',
      title:'Quantos passageiros e bagagens?',
      type:'choice',
      options:['1 passageiro','2 passageiros','3 passageiros','4 passageiros','Mais de 4 (me avise)']
    },
    {
      key:'obs',
      title:'Alguma observação? (opcional)',
      type:'textarea',
      placeholder:'Ex: Levar cadeirinha de bebê, voo pode atrasar, parada em Vila Velha…'
    }
  ];

  let current = 0;
  const data = {};

  function render(){
    const step = STEPS[current];
    bar.style.width = ((current/(STEPS.length-1))*100) + '%';

    let html = '<h4>' + step.title + '</h4>';

    if (step.type === 'choice') {
      html += '<div class="ai-options">';
      step.options.forEach(op => {
        const sel = data[step.key] === op ? ' selected' : '';
        html += '<button type="button" class="ai-opt' + sel + '" data-val="' + op.replace(/"/g,'&quot;') + '">' + op + '</button>';
      });
      html += '</div>';
    } else if (step.type === 'text') {
      html += '<input type="text" id="aiInput" placeholder="' + (step.placeholder||'') + '" value="' + (data[step.key]||'') + '" />';
    } else if (step.type === 'textarea') {
      html += '<textarea id="aiInput" placeholder="' + (step.placeholder||'') + '">' + (data[step.key]||'') + '</textarea>';
    }

    stepEl.innerHTML = html;

    // bind options
    stepEl.querySelectorAll('.ai-opt').forEach(b => {
      b.addEventListener('click', () => {
        data[step.key] = b.getAttribute('data-val');
        stepEl.querySelectorAll('.ai-opt').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
      });
    });

    btnBack.style.visibility = current === 0 ? 'hidden' : 'visible';
    btnNext.textContent = current === STEPS.length - 1 ? 'Enviar pelo WhatsApp →' : 'Próximo →';
  }

  function captureCurrent(){
    const step = STEPS[current];
    if (step.type === 'text' || step.type === 'textarea') {
      const inp = document.getElementById('aiInput');
      if (inp) data[step.key] = inp.value.trim();
    }
  }

  function buildMessage(){
    const tipo = data.tipo || '-';
    const od = data.origem_destino || '-';
    const dh = data.data_hora || '-';
    const px = data.passageiros || '-';
    const obs = data.obs || '';

    let msg = 'Olá Caio! Quero solicitar uma corrida.\n\n';
    msg += '🚗 Tipo: ' + tipo + '\n';
    msg += '📍 Origem/Destino: ' + od + '\n';
    msg += '📅 Data/Horário: ' + dh + '\n';
    msg += '👥 Passageiros: ' + px + '\n';
    if (obs) msg += '📝 Observações: ' + obs + '\n';
    msg += '\nAguardo confirmação. Obrigado!';
    return msg;
  }

  function openWhatsApp(){
    const text = encodeURIComponent(buildMessage());
    const url = 'https://wa.me/' + PHONE + '?text=' + text;
    if (window.dataLayer) window.dataLayer.push({event:'lead_submit', source:'ai_form'});
    if (window.gtag) window.gtag('event','generate_lead',{method:'ai_form'});
    window.open(url,'_blank','noopener');
  }

  // ---- Wire up triggers ----
  document.querySelectorAll('[data-open-form="true"]').forEach(btn => {
    btn.addEventListener('click', () => {
      current = 0;
      render();
      if (typeof modal.showModal === 'function') modal.showModal();
      else modal.setAttribute('open','');
    });
  });

  btnClose.addEventListener('click', () => modal.close && modal.close());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close && modal.close();
  });

  btnNext.addEventListener('click', () => {
    captureCurrent();
    const step = STEPS[current];
    // validação simples para campos obrigatórios
    if (step.key !== 'obs' && !data[step.key]) {
      const inp = document.getElementById('aiInput');
      if (inp) {
        inp.style.borderColor = '#ff5959';
        inp.focus();
      }
      return;
    }
    if (current === STEPS.length - 1) {
      openWhatsApp();
      modal.close && modal.close();
      return;
    }
    current++;
    render();
  });

  btnBack.addEventListener('click', () => {
    captureCurrent();
    if (current > 0) { current--; render(); }
  });

  // Enter avança
  document.addEventListener('keydown', (e) => {
    if (modal.open && e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      btnNext.click();
    }
  });

})();
