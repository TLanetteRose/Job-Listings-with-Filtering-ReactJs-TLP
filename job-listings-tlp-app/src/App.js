import React, {useState, useEffect} from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import FilterBar from  './components/FilterBar';
import JobCard from './components/JobCard';
import data from './data.json';
import './App.scss';


function App() {
  
    const [filterData, setFilterData] = useState([])
    const [items, setItems] = useState([])

    const handleSelectFilter = (data) => {
        let copy = Object.assign([], filterData);

        if (copy.some(e => e.value === data.value && e.prop === data.prop)) {
            return HandleRemove(data)
        } else {
            copy.push(data)
            setFilterData(copy)
        }
    }

    const HandleRemove = (data) => {
        const copy = filterData.filter(e => e.value !== data.value || e.prop !== data.prop)
        setFilterData(copy)
    }

    const handleClear = () => {
        setFilterData([])
    }

    useEffect(() =>{
        setItems(data)
    }, [])

    useEffect(() =>{
        if(filterData.length > 0) {
            const filteredItems = data.filter((item) => {
                // eslint-disable-next-line
                return filterData.every(filter => {
                    if(Array.isArray(item[filter.key])){
                        return item[filter.key].includes(filter.value)
                    } else if(typeof item[filter.key] === 'string') {
                        return item[filter.key] === filter.value;
                    }
                })
            });
            setItems(filteredItems)
        } else {
            setItems(data)
        }
    }, [filterData])

    return (
        <React.Fragment>
            <Header></Header>
            <div className="container">
                {filterData.length > 0 && <FilterBar items={filterData} removeItem={HandleRemove} clear={handleClear} />}
                {items && items.map(item => <JobCard item={item} key={item.id} select={handleSelectFilter} />)}
            </div>
            <Footer></Footer>
        </React.Fragment>    
    );
}

export default App;
