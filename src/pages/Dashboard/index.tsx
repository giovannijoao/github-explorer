import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17498851?s=460&u=cafa0799ff1932aff4f2d9a770126bee08759001&v=4"
            alt="João Giovanni"
          />
          <div>
            <strong>giovannijoao/jsonata</strong>
            <p>
              JSONata query and transformation language - http://jsonata.org
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17498851?s=460&u=cafa0799ff1932aff4f2d9a770126bee08759001&v=4"
            alt="João Giovanni"
          />
          <div>
            <strong>giovannijoao/jsonata</strong>
            <p>
              JSONata query and transformation language - http://jsonata.org
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17498851?s=460&u=cafa0799ff1932aff4f2d9a770126bee08759001&v=4"
            alt="João Giovanni"
          />
          <div>
            <strong>giovannijoao/jsonata</strong>
            <p>
              JSONata query and transformation language - http://jsonata.org
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
