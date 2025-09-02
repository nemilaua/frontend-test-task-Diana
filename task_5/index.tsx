'use client';

import { useState } from 'react';
import useSWR, { SWRConfig } from 'swr';

import styles from './page.module.css';
import { fetchOnePost } from '@/libs/fetchOnePost';

const ComponentOne = () => {
    const { data } = useSWR('post', fetchOnePost);
    return data ? (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentOne</span>
        </div>
    ) : (
        <div>...Loading ComponentOne</div>
    );
};

const ComponentTwo = () => {
    const { data } = useSWR('post', fetchOnePost); // берём тот же ключ
    return data ? (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentTwo</span>
        </div>
    ) : (
        <div>...Loading ComponentTwo</div>
    );
};

export default function Home() {
    const [showComponentTwo, setShowComponentTwo] = useState(false);

    return (
        <SWRConfig
            value={{
                fallback: {
                    // можно подставить мок или реальные данные
                    post: {
                        title: 'Заголовок из fallback',
                        body: 'Текст из fallback',
                    },
                },
            }}
        >
            <main className={styles.main}>
                <div className={styles.description}>
                    <ComponentOne />
                    {showComponentTwo ? (
                        <ComponentTwo />
                    ) : (
                        <button className={styles.btn} onClick={() => setShowComponentTwo(true)}>
                            Show ComponentTwo
                        </button>
                    )}
                </div>
            </main>
        </SWRConfig>
    );
}
