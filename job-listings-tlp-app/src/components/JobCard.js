import React from 'react';

//Webpack V4 you need to use require.context() for importing images from data.json


export default function JobCard ({item, select}) {
    const pathToAssets = require.context('./assets');

    return (
        
        <div className={`card job${item.featured ? ' featured-label' : ''}`}>
            <div className='section descrip&tion'>
                <div className='logo'>
                    <img src={pathToAssets(item.logo)} alt={item.company} />
                </div>
                <div className='job-info'>
                    <div className='top row'>
                        <div className='company'>{item.company}</div>
                        {item.new && <div className='highlighted new'>new!</div>}
                        {item.featured && <div className='highlighted featured'>featured</div>}
                    </div>
                    <div className='row'>
                        <div className='position'>{item.position}</div>
                    </div>
                    <div className='bottom row'>
                        <span className='postedAt'>{item.postedAt}</span>
                        <span className='contract'>{item.contract}</span>
                        <span className='location'>{item.location}</span>
                    </div>
                </div>
            </div>
            <div className='section filters'>
                <span className='filter-item' onClick={() => select({value:item.role, key:'role'})}>{item.role}</span>
                <span className='filter-item' onClick={() => select({value:item.level, key:'level'})}>{item.level}</span>
                {item.tools.map((tool,i) => <span key={i} className='filter-item' onClick={() => select({value:tool, key:'tools'})}>{tool}</span>)}
                {item.languages.map((language,i) => <span key={i} className='filter-item' onClick={() => select({value:language, key:'languages'})}>{language}</span>)}
            </div>
        </div>
    );
}






