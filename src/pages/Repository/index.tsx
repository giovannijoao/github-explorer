import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositoryInfo, setRepositoryInfo] = useState<Repository | null>(null);
  const [issuesList, setIssuesList] = useState<Issue[]>([]);
  useEffect(() => {
    // api.get<Repository>(`/repos/${params.repository}`).then(res => {
    //   setRepositoryInfo(res.data);
    // });

    // api.get<Repository>(`/repos/${params.repository}/issues`).then(res => {
    //   console.
    // });

    const loadData = async (): Promise<void> => {
      const [repository, issues] = await Promise.all([
        api.get<Repository>(`/repos/${params.repository}`),
        api.get<Issue[]>(`/repos/${params.repository}/issues`),
      ]);
      setRepositoryInfo(repository.data);
      setIssuesList(issues.data);
    };
    loadData();
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repositoryInfo && (
        <RepositoryInfo>
          <header>
            <img
              src={repositoryInfo.owner.avatar_url}
              alt={repositoryInfo.owner.login}
            />
            <div>
              <strong>{repositoryInfo.full_name}</strong>
              <p>{repositoryInfo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositoryInfo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repositoryInfo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositoryInfo.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      {issuesList.length > 0 && (
        <Issues>
          {issuesList.map(issue => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
        </Issues>
      )}
    </>
  );
};

export default Repository;
