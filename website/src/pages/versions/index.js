import React from 'react';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import versions from '../../../versions.json';

function Version() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter(version => version !== latestVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      permalink="/versions"
      description="single-spa Versions page listing all documented site versions">
      <div className="container margin-vert--xl">
        <h1>Documentación de versiones single-spa</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Última version (Estable)</h3>
          <p>Aquí puedes encontrar la última documentación.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/getting-started-overview')}>
                    Documentación
                  </Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases`}>
                    Notas de publicación
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Versiones pasadas</h3>
            <p>
              Aquí puedes encontrar la documentación de versiones previas de single-spa.
            </p>
            <table>
              <tbody>
                {pastVersions.map(version => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/getting-started-overview`)}>
                        Documentación
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases`}>
                        Notas de publicación
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Version;
