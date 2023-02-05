import React from 'react'

export default function Item({item}) {
  return (
            <li key={item.id}>
                {item.value}
            </li>
        )
}

