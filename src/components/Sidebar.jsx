import React from 'react';
import '../css/Sidebar.css';
const Sidebar = () => { 
    return (
        <div className="container-fluid mt-5">
            
            <div className="row">
                
                <div className="col-lg-3 d-none d-lg-block sidebar-position">
                    <div className="sidebar-container sticky-top border rounded-3 p-4 bg-white sidebar-shadow">
                        
                        <h4 className="mb-4 text-danger fw-bolder"> Filter Your Stay</h4>
                        
                        <hr className="my-3"/>
                        
                        <div className="filter-group mb-4">
                            <h5 className="fw-bold mb-3 text-dark">Price Range</h5>
                            
                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-semibold text-danger">₹500</span>
                                <span className="fw-semibold text-danger">₹10000+</span>
                            </div>
                            
                          
                            <input type="range" className="form-range custom-range-pnb" id="priceRange" min="500" max="10000" />
                            <p className="text-muted small mt-2">Current: ₹2500</p>
                        </div>
                        
                        <hr className="my-3"/>

                        <div className="filter-group mb-4">
                            <h5 className="fw-bold mb-3 text-dark">Property Type</h5>
                            <div className="form-check mb-2">
                              
                                <input className="form-check-input custom-checkbox-pnb" type="checkbox" id="hotelCheck" />
                                <label className="form-check-label fw-medium" htmlFor="hotelCheck">
                                    <i className="bi bi-building me-2 text-secondary"></i> Hotels
                                </label>
                            </div>
                            <div className="form-check mb-2">
                              
                                <input className="form-check-input custom-checkbox-pnb" type="checkbox" id="resortCheck" />
                                <label className="form-check-label fw-medium" htmlFor="resortCheck">
                                    <i className="bi bi-tree me-2 text-secondary"></i> Resorts
                                </label>
                            </div>
                            <div className="form-check mb-2">
                              
                                <input className="form-check-input custom-checkbox-pnb" type="checkbox" id="apartmentCheck" />
                                <label className="form-check-label fw-medium" htmlFor="apartmentCheck">
                                    <i className="bi bi-house-door me-2 text-secondary"></i> Apartments
                                </label>
                            </div>
                        </div>

                        <hr className="my-3"/>

                        <div className="filter-group mb-4">
                            <h5 className="fw-bold mb-3 text-dark">Guest Rating</h5>
                            {[5, 4, 3].map((rating) => (
                                <div className="form-check mb-2" key={rating}>
                                 
                                    <input className="form-check-input custom-checkbox-pnb" type="checkbox" id={`rating${rating}`} />
                                    <label className="form-check-label fw-medium" htmlFor={`rating${rating}`}>
                                        {Array(rating).fill().map((_, i) => <i key={i} className="bi bi-star-fill text-warning small me-1"></i>)} & Up
                                    </label>
                                </div>
                            ))}
                        </div>

                      
                        <button className="btn btn-danger w-100 fw-bold py-2 mt-3 search-btn-oyo">
                            Apply Filters
                        </button>

                    </div>
                </div>
                
                <div className="col-lg-9 col-12 margin-sidebar">
                    <h2 className="mb-4 fw-bolder Hotels-Listing text-dark ">Hotels Listing <span className="text-muted fs-5">(Showing 45 results)</span></h2>
                    
                
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2         ">
                        
                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                               <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                 <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Grand Lux Hotel</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Chandigarh, Sector 17</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-success me-2">4.5 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Excellent (1200 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹3,500 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Comfort Inn Plaza</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Mohali, Phase 7</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-warning text-dark me-2">3.9 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Very Good (850 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹2,800 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                             <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                 <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Royal Residency</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Panchkula, Sector 5</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-info me-2">4.1 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Good (540 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹4,100 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
                        
                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                               <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                 <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Grand Lux Hotel</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Chandigarh, Sector 17</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-success me-2">4.5 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Excellent (1200 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹3,500 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                                <img  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Comfort Inn Plaza</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Mohali, Phase 7</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-warning text-dark me-2">3.9 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Very Good (850 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹2,800 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm border-0">
                             <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=400" className="card-img-top" alt="Hotel Image 2"/>
                                 <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">Royal Residency</h5>
                                    <p className="card-text text-muted small"><i className="bi bi-geo-alt-fill me-1"></i> Panchkula, Sector 5</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="badge bg-info me-2">4.1 <i className="bi bi-star-fill"></i></span>
                                        <span className="text-secondary small">Good (540 reviews)</span>
                                    </div>
                                    <h4 className="text-danger fw-bolder mb-0">₹4,100 <span className="text-muted small fw-normal">/ night</span></h4>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 d-grid">
                                    <a href="#" className="btn btn-danger fw-bold">View Details</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;