import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'reflect-metadata';
import startOrm from "../config/initialize-database";
import { User } from "../entities/User";
import { Links } from '../components/Links'

export default function Users(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Food: { props.data.food }
        </h1>
        <ul>
          Users:
          { props.data.userNames.map(n => <li key={n}>{n}</li>) }
        </ul>
        <Links />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const orm = await startOrm();
  const id = Math.floor((Math.random() * 10000000000000) + 1)
  const user = new User(`Example User ${id}`, `example${id}@example.com`)
  await orm.em.persistAndFlush([user]);
  const users = await orm.em.find(User);
  return {
    props: {
      data: {
        food: 'banana',
        userNames: users.map(u => u.name),
      }
    }
  }
}
