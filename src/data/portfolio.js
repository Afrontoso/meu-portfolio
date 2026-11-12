// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para atualizar o site.
// Imagens dos projetos ficam em /public/projects.

export const perfil = {
  nome: 'Victor Leandro',
  cargo: 'Desenvolvedor Full Stack',
  local: 'Brasília, DF',
  resumo:
    'Construo produtos web de ponta a ponta — da interface ao banco de dados. Gosto de transformar problemas reais (agendas, finanças, rotinas) em sistemas simples de usar.',
  email: 'victor2lra@gmail.com',
  github: 'https://github.com/Afrontoso',
  linkedin: 'https://www.linkedin.com/in/victorleandro',
  // Coloque um arquivo em /public (ex.: /public/curriculo.pdf) e preencha abaixo para exibir o botão.
  curriculo: '',
};

export const sobre = [
  'Sou desenvolvedor full stack na Secretaria de Segurança Pública do Distrito Federal (SSP-DF) e estudante de Engenharia de Software na Universidade de Brasília (UnB).',
  'Fora do trabalho, desenvolvo sistemas para clientes e para resolver problemas do meu dia a dia: agendamento para clínicas, controle financeiro com projeção de saldo, leitura de notas fiscais, planejamento de rotina da família e por aí vai.',
  'Meu foco hoje é o ecossistema TypeScript — Next.js, React, NestJS e Prisma —, mas tenho base sólida em C, Java e Python vinda da faculdade. Nas horas vagas: games e mais código.',
];

export const numeros = [
  { valor: '30+', rotulo: 'repositórios no GitHub' },
  { valor: '10+', rotulo: 'projetos publicados' },
  { valor: '6', rotulo: 'linguagens de programação' },
];

// tipo: 'trabalho' | 'estudo'
export const trajetoria = [
  {
    tipo: 'trabalho',
    periodo: 'Atual',
    titulo: 'Desenvolvedor Full Stack',
    local: 'SSP-DF — Secretaria de Segurança Pública do DF',
    descricao:
      'Desenvolvimento de sistemas internos web, do front-end ao back-end, em times ágeis.',
  },
  {
    tipo: 'trabalho',
    periodo: '2025 — Atual',
    titulo: 'Desenvolvedor Freelancer',
    local: 'CraftSystem',
    descricao:
      'Sites institucionais e sistemas sob medida para clientes, como a plataforma de agendamento da clínica Espaço Ciclos.',
  },
  {
    tipo: 'estudo',
    periodo: 'Em andamento',
    titulo: 'Bacharelado em Engenharia de Software',
    local: 'Universidade de Brasília (UnB)',
    descricao:
      'Disciplinas de estruturas de dados, sistemas operacionais, redes, orientação a objetos e projeto de algoritmos.',
  },
  {
    tipo: 'trabalho',
    periodo: '2025',
    titulo: 'Trainee',
    local: "Orc'estra — Empresa Júnior de Engenharia de Software",
    descricao: 'Processo trainee com desenvolvimento de aplicações em React e TypeScript.',
  },
  {
    tipo: 'estudo',
    periodo: '2023',
    titulo: 'Java — Programação Orientada a Objetos',
    local: 'Udemy',
    descricao: 'Curso completo de Java e orientação a objetos.',
  },
  {
    tipo: 'estudo',
    periodo: '2022',
    titulo: 'Web Design',
    local: 'StartSe',
    descricao: 'Fundamentos de HTML, CSS e design de interfaces para a web.',
  },
];

export const habilidades = [
  {
    grupo: 'Front-end',
    itens: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    grupo: 'Back-end',
    itens: ['Node.js', 'NestJS', 'Prisma', 'REST APIs', 'Python', 'Java'],
  },
  {
    grupo: 'Banco de dados & Cloud',
    itens: ['PostgreSQL', 'Supabase', 'Neon', 'Firebase', 'Vercel'],
  },
  {
    grupo: 'Outros',
    itens: ['C', 'Swift', 'Git & GitHub', 'Turborepo', 'IA local (Ollama)', 'LaTeX'],
  },
];

// categoria: 'cliente' | 'pessoal' | 'academico'
export const projetos = [
  {
    nome: 'Espaço Ciclos',
    categoria: 'cliente',
    destaque: true,
    descricao:
      'Plataforma para uma clínica de psicologia e nutrição em Brasília: site institucional, agendamento online pelo paciente, painel da profissional e agenda da secretaria.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    imagens: ['espacociclos-1.jpg', 'espacociclos-2.jpg', 'espacociclos-3.jpg', 'espacociclos-4.jpg'],
    demo: 'https://www.espacociclos.com.br/',
  },
  {
    nome: 'Controle Financeiro',
    categoria: 'pessoal',
    destaque: true,
    descricao:
      'Fluxo de caixa diário com projeção de saldo: mostra quanto você terá em cada dia dos próximos meses — inclusive o dia em que o saldo fica negativo.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    imagens: ['controle-1.jpg', 'controle-2.jpg', 'controle-3.jpg'],
    demo: 'https://controle-financeiro-lime-gamma.vercel.app',
    repo: 'https://github.com/Afrontoso/controle-financeiro',
  },
  {
    nome: 'CraftSystem',
    categoria: 'cliente',
    destaque: true,
    descricao:
      'Site da CraftSystem, com portfólio de projetos, páginas bilíngues (PT/EN) e foco em performance.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    imagens: ['craftsystem-1.jpg'],
    demo: 'https://www.craftsystem.com.br/pt',
  },
  {
    nome: 'Consultório Multi-Área',
    categoria: 'pessoal',
    destaque: true,
    descricao:
      'SaaS de agendamento para consultórios de psicologia, fisioterapia, nutrição e outras áreas. Monorepo com front e API separados e CI no GitHub Actions.',
    stack: ['Next.js', 'NestJS', 'Prisma', 'Supabase', 'Turborepo'],
    imagens: ['consultorio-1.jpg'],
    demo: 'https://consultorio-multiarea.vercel.app',
    repo: 'https://github.com/Afrontoso/consultorio-multiarea',
  },
  {
    nome: 'Fluxograma UnB',
    categoria: 'academico',
    descricao:
      'Planejador de graduação com o fluxograma interativo dos cursos da UnB, login e acompanhamento do progresso nas disciplinas.',
    stack: ['React', 'TypeScript', 'Firebase'],
    imagens: ['fluxograma-1.jpg'],
    demo: 'https://fluxograma-react.vercel.app',
    repo: 'https://github.com/Afrontoso/fluxograma-react',
  },
  {
    nome: 'Agendamento de Sala',
    categoria: 'pessoal',
    descricao:
      'Reserva de sala de reunião com visão diária e semanal, recorrência e edição protegida por PIN, sem precisar de login.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    imagens: ['agendamento-1.jpg'],
    demo: 'https://agendamentoju.vercel.app',
    repo: 'https://github.com/Afrontoso/agendamentoju',
  },
  {
    nome: 'Notinhas',
    categoria: 'pessoal',
    descricao:
      'Importa a NFC-e de compras de mercado pela SEFAZ-DF e mostra histórico de preços, onde está mais barato e uma lista de compras sugerida.',
    stack: ['Next.js', 'Prisma', 'Neon', 'Tailwind'],
    demo: 'https://notinhas-iota.vercel.app',
    repo: 'https://github.com/Afrontoso/notinhas',
  },
  {
    nome: 'Calendário da Família',
    categoria: 'pessoal',
    descricao:
      'Rotina da família com tempo de deslocamento, alertas de conflitos e lacunas, comparação de cenários e divisão de tarefas.',
    stack: ['Next.js', 'TypeScript', 'Neon'],
    demo: 'https://calendario-familia-amber.vercel.app',
    repo: 'https://github.com/Afrontoso/calendario-familia',
  },
  {
    nome: 'Botfinanças',
    categoria: 'pessoal',
    descricao:
      'Bot de finanças no Telegram que entende texto e voz com IA local (Ollama), registra transações e envia resumos.',
    stack: ['Next.js', 'Prisma', 'Ollama', 'Telegram'],
    demo: 'https://botfinancas-beta.vercel.app',
    repo: 'https://github.com/Afrontoso/botfinancas',
  },
  {
    nome: 'FinHealth',
    categoria: 'pessoal',
    descricao: 'Painel de saúde financeira compartilhado para o casal planejar o mês junto.',
    stack: ['Next.js', 'Prisma', 'Tailwind'],
    demo: 'https://finhealth-seven.vercel.app',
  },
  {
    nome: 'Cliente DNS',
    categoria: 'academico',
    descricao: 'Cliente DNS implementado do zero sobre sockets UDP, para a disciplina de Redes de Computadores.',
    stack: ['C', 'Sockets'],
    repo: 'https://github.com/Afrontoso/redes-trab01-cliente-dns',
  },
  {
    nome: 'Par Mais Próximo',
    categoria: 'academico',
    descricao:
      'Visualização do algoritmo de dividir e conquistar: cada tecla digitada vira um ponto e o par mais próximo é encontrado em tempo real.',
    stack: ['Next.js', 'TypeScript'],
    repo: 'https://github.com/Afrontoso/Dividir-e-Conquistar',
  },
  {
    nome: 'Sistemas Operacionais',
    categoria: 'academico',
    descricao: 'Trabalhos práticos em C da disciplina de Fundamentos de Sistemas Operacionais.',
    stack: ['C'],
    repo: 'https://github.com/Afrontoso/Fundamentos_Sistemas_Operacionais',
  },
  {
    nome: 'Cadastro Acadêmico UnB',
    categoria: 'academico',
    descricao: 'Sistema de cadastro de alunos, professores, disciplinas e turmas para Orientação a Objetos.',
    stack: ['Java', 'POO'],
    repo: 'https://github.com/Afrontoso/OO-CadastroUnB',
  },
];

export const categorias = {
  todos: 'Todos',
  cliente: 'Clientes',
  pessoal: 'Pessoais',
  academico: 'Acadêmicos',
};
