import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import classnames from 'classnames';

const data = [
  {
    content: 'Usa múltiples frameworks en una aplicación single-spa, permitiendote dividir el código por funcionalidad y tener aplicaciones Angular, React, Vue.js, etc, todas conviviendo en armonía.',
    imageUrl: 'img/icons/148705-essential-collection/svg/paper-plane.svg',
    title: 'Libertad de Framework',
  },
  {
    content: `Levanta nuevas aplicaciones web junto a las existentes. Tu escribes las aplicaciones, single-spa hace que ellas trabajen juntas y no las cargarás hasta que sean necesarias.`,
    imageUrl: 'img/icons/148705-essential-collection/svg/download.svg',
    title: 'Aplicaciones con carga diferida',
  },
  {
    content:
      'Combina muchas aplicaciones pequeñas, empoderando a los equipos a escoger su tecnología. Mantente ágil a medida que tu equipo, producto y tecnología cambian con el tiempo.',
    imageUrl: 'img/icons/148705-essential-collection/svg/settings-1.svg',
    title: 'Microservicios Front-end',
  },
];

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <div className="row">
          {data.map(({ title, content, imageUrl }, idx) => (
            <div key={idx} className={classnames('col col--4', styles.feature)}>
              {imageUrl && (
                <div className="margin-bottom--lg">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl(imageUrl)}
                    alt={title}
                  />
                </div>
              )}
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
