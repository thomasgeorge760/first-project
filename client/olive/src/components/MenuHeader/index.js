import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { getAllCategory } from '../../actions'
import { Link } from 'react-router-dom';

function MenuHeader(props) {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllCategory())
    }, [])

    const renderCategories = (categories) => {

        let Categories = [];
        for (let category of categories) {
            Categories.push(
                <li key={category._id}>
                    {
                        category.parentId ?  <Link to={`/pbs/${category.slug}`}>{category.name}</Link> : <span>{category.name}</span>
                    }
                    
                    {category.children.length > 0 ? (
                        <ul>
                            {renderCategories(category.children)}
                        </ul>
                    ) : null}
                </li>
            );
        }

        return Categories;

    }


    return (
        <div className="menuHeader">
            <ul>
               
                { category.categories.length > 0 ? renderCategories(category.categories) : null }
            </ul>
        </div>
    )
}

export default MenuHeader
