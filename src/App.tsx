import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Header } from './components/header';
import { Content } from './components/Content';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <div className="container">
        <Header title={selectedGenre.title} />
        <Content selectedGenreId={selectedGenreId} setSelectedGenre={setSelectedGenre} />
      </div>
    </div>
  )
}