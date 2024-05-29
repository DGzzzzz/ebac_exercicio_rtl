import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.iset.io/assets/55268/produtos/32963/059077063d89a4803a97c74d6d160c77637f6871d5fd4.png">
        Olha só que legal esse quadro do Dark Souls.
      </Post>
    </div>
  );
}

export default App;
