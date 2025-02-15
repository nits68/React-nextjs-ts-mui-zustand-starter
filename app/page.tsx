"use client";

import Image from "next/image";
import { Badge, Button } from "@mui/material";

import useStore from "../store/store";
import styles from "./page.module.css";

export default function Home() {
  const s = useStore();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.logo} src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Badge
          badgeContent={`Count: ${s.counter}`}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            onClick={s.incrementCounter}
            color={s.counter % 2 == 0 ? "primary" : "secondary"}
          >
            Hello Material UI (MUI) - Increment counter
          </Button>
        </Badge>
        <Button sx={{ textTransform: "none" }} variant="contained" disabled={s.data} onClick={s.getUsers}>
          Execute API call - getUsers()
        </Button>
        <Button sx={{ textTransform: "none" }} variant="contained" disabled={!s.data} onClick={s.clearUsers}>
          Clear users data
        </Button>
        <div>
          {s.unpressed ? (
            <h3>Users: Click "Execute API call" button</h3>
          ) : s.loading ? (
            <p>Loading...</p>
          ) : s.error ? (
            <p>Error fetching data: {s.errorData}</p>
          ) : (
            <div>
              <h3>Users:</h3>
              <ul>{s.data?.map(({ name, id }: { name: string; id: number }) => <li key={id}>{name}</li>)}</ul>
            </div>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
