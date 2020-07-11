import React from 'react';

export default function FilterBar({items, removeItem, clear}) {
    return (
        <div id='filterBar' className='card'>
            <div>
                {items.map((item,i) => {
                    return (
                        <div className='filter-tab' key={i}>
                            <div className='filter-item'>{item.value}</div>
                            <span className='close-button' onClick={() => removeItem(item)}></span>
                        </div>
                    )
                })}
            </div>
            <span onClick={clear}>Clear all</span>
        </div>
    );
}

