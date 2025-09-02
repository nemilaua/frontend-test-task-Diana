import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(() => {
        console.log('hi from MainComponent');
    }, []); // пустой массив зависимостей → ссылка стабильна

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }: { makeLog: () => void }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
