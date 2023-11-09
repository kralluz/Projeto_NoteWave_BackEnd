import { Client } from "pg";
import 'dotenv/config';


export const carros = `
<h1>🚀 Apresentando o Nosso Clone do Notion!</h1>
    
    <p>Seja bem-vindo ao nosso projeto emocionante de desenvolvimento de um clone do Notion! Estamos entusiasmados em compartilhar este projeto com você e mostrar como estamos construindo uma plataforma de produtividade inovadora.</p>

    <h2>💡 O que é o Nosso Clone do Notion?</h2>
    <p>O Nosso Clone do Notion é uma aplicação web que visa replicar as principais funcionalidades da famosa plataforma Notion. Se você já é fã do Notion, você vai adorar o que estamos construindo. Se você ainda não conhece o Notion, prepare-se para uma experiência de organização e produtividade como nunca antes!</p>

    <h2>🛠️ Tecnologias Utilizadas</h2>
    <p>Estamos utilizando tecnologias modernas para garantir um desempenho excepcional e uma experiência de usuário incrível. Aqui estão algumas das tecnologias principais que estamos empregando:</p>
    <ul>
        <li>React: A base do nosso frontend, garantindo uma interface de usuário dinâmica e responsiva.</li>
        <li>Node.js com TypeScript: Alimentando nosso backend, tornando-o seguro e eficiente.</li>
        <li>SQLite com TypeORM: Nosso banco de dados leve e fácil de usar.</li>
        <li>Express: Framework para construção de APIs RESTful robustas.</li>
    </ul>

    <h2>📝 Funcionalidades Planejadas</h2>
    <p>Estamos trabalhando duro para oferecer funcionalidades empolgantes que tornarão a nossa aplicação indispensável. Alguns dos recursos planejados incluem:</p>
    <ul>
        <li>Gerenciamento de Notas: Crie, edite e exclua notas de forma eficiente.</li>
        <li>Organização de Páginas: Crie páginas e organize suas notas de maneira lógica e intuitiva.</li>
        <li>Pesquisa Avançada: Encontre rapidamente as informações que você precisa com nossa pesquisa avançada.</li>
        <li>Personalização: Personalize a aparência e a experiência da sua plataforma.</li>
    </ul>

    <h2>🚧 O Progresso Atual</h2>
    <p>Atualmente, estamos em uma fase de desenvolvimento ativa. O frontend está sendo construído usando Styled Components para criar uma interface atraente e amigável. O backend está se expandindo para atender a todas as nossas funcionalidades planejadas. Nossa equipe está empenhada em garantir que cada aspecto do projeto seja polido e de alta qualidade.</p>

    <h2>🙌 Queremos a Sua Opinião!</h2>
    <p>Estamos animados para compartilhar nosso projeto e estamos abertos a feedback e sugestões. Afinal, queremos criar uma plataforma que seja útil e agradável para você. Se você tiver ideias ou comentários, não hesite em compartilhá-los conosco.</p>

    <h2>📄 Conclusão</h2>
    <p>O Nosso Clone do Notion é uma jornada emocionante de desenvolvimento que tem como objetivo trazer para você uma plataforma de produtividade excepcional. Estamos comprometidos em criar uma experiência que permita organizar, criar e colaborar de maneira eficiente. Mantenha-se atualizado conosco e acompanhe nosso progresso!</p>

    <p>Fique ligado para mais atualizações e obrigado por se juntar a nós nesta empolgante jornada de desenvolvimento. 😊🚀</p>

    <h2>📝 Funcionalidades de Notas</h2>
<p>Com o Nosso Clone do Notion, você pode criar notas de diversas formas e estilizá-las como preferir. Veja como:</p>

<h3>🗒️ Citações</h3>
<blockquote>
    <p>As citações permitem que você destaque informações importantes. Elas são perfeitas para destacar insights, trechos de livros ou citações inspiradoras.</p>
</blockquote>

<h3>☑️ Checkbox</h3>
<ul>
    <li>
        <input type="checkbox" id="checkbox1" name="checkbox1" value="checked">
        <label for="checkbox1">Marque tarefas concluídas com facilidade.</label>
    </li>
    <li>
        <input type="checkbox" id="checkbox2" name="checkbox2" value="checked">
        <label for="checkbox2">Crie listas de verificação para acompanhar suas atividades.</label>
    </li>
</ul>

<h3>📊 Tabelas</h3>
<table border="1">
    <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
    </tr>
    <tr>
        <td>João</td>
        <td>joao@example.com</td>
        <td>(123) 456-7890</td>
    </tr>
    <tr>
        <td>Maria</td>
        <td>maria@example.com</td>
        <td>(234) 567-8901</td>
    </tr>
</table>`;



const connectionString = process.env.DATABASE_URL;

export const client = new Client({
    connectionString: connectionString,
});

export const connectDatabase = async () => {
    try {
        await client.connect();
        console.log("successful - Connected to database!!");
    } catch (error) {
        console.log(error); 
    }
};