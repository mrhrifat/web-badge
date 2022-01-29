import React, { useState, Suspense, lazy } from 'react'
import Spinner from './Spinner'
import DownloadLink from "react-download-link";
import { DownloadIcon } from '@primer/octicons-react'
import classes from '../styles/iconCard.module.css'
const SVGIcon = lazy(() => import('./SVGIcon'))
const Badge = lazy(() => import('./Badge'))
const Search = lazy(() => import('./Search'))


const IconCard = ({ data }) => {

    const [search, setSearch] = useState('')
    // console.log(visitor)
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Search search={(e) => setSearch(e)} />
            </Suspense>


            <div className="container">


                <div className="row">
                    {data.filter(item => {
                        if (search === '') {
                            return item
                        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((item) => (
                        <div className="col-md-3 col-sm-4 col-xs-6 my-2" key={item.slug}>
                            <div className='card' style={{ borderRadius: '1rem' }}>
                                <div className='card-img-fluid' style={{ width: '20%', margin: '10px auto', display: 'block' }}>
                                    <Suspense fallback={<Spinner />}>
                                        <SVGIcon svg={item.svg} alt={item.title} />
                                    </Suspense>
                                </div>
                                < >
                                    <Suspense fallback={<Spinner />}>
                                        <Badge title={item.title} hex={item.hex} />
                                    </Suspense>
                                </>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default IconCard
