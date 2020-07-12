import React from 'react';

const JobCard = ({item, select}) => {
    const pathToAssets = require.context('.');

    return (
        <div className={`card job${item.featured ? ' featured' : ''}`}>
            <div className='jobs__column job__column-left'>
                <div className='logo'>
                    <img src={pathToAssets(item.logo)} alt={item.company} />
                </div>
                <div className='jobs__info'>
                    <div className='company__info'>
                        <div className='company'>{item.company}</div>
                        {item.new && <div className='highlighted new'>New!</div>}
                        {item.featured && <div className='highlighted featured'>Featured</div>}
                    </div>
                    <div className='row'>
                        <span className='jobs__title'>{item.position}</span>
                    </div>

                    <div className='bottom-row jobs__details'>
                        <span className='jobs__details-item'>{item.postedAt}</span>
                        <span className='jobs__details-item'> {item.contract} </span>
                        <span className='jobs__details-item'>{item.location}</span>
                    </div>
                </div>
            </div>

            <div className='jobs__column jobs__column-right'>
                <span className='filter-item' onclick={() => select({value:item.role, key:'role'})}>{item.role}</span>
                <span className='filter-item' onClick={() => select({value:item.level, key: 'level'})}>{item.level}</span>
                {item.tools.map((tool,i) => <span key={i} className='filter-item' onClick={() => select({value:tool, key:'tools'})}>{tool}</span>)}
                {item.languages.map((language,i) => <span key={i} className='filter-item' onClick={() => select({value:language, key:'language'})}>{language}</span>)}
            </div>
        </div>
    );
}

export default JobCard;