import React, { useState } from 'react';

export default function ComponenteReact() {
  const [cliente, setCliente] = useState('Elvis')
  return (
    <div>{cliente}</div>
  )
}
