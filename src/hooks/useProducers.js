import { useState, useEffect } from "react";

import { loadProducers } from '../services/loadingMocks';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const response = loadProducers();
    response.list.sort((a, b) => b.stars - a.stars);

    setTitle(response.title);
    setList(response.list);
  }, []);

  return [title, list];
}