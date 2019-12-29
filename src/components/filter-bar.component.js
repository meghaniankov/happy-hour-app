import React from 'react';

 
function FilterBar ()  {
    return(
      <div class="Filter-Bar">
         <div class="btn-filter-custom"> <button><p>Price                 </p> </button></div>
         <div class="btn-filter-custom"> <button><p>Neighborhood          </p> </button></div>
         <div class="btn-filter-custom"> <button><p>Days                  </p> </button></div>
         <div class="btn-filter-custom"> <button><p>Deal type             </p> </button></div>
      </div>
    )
  }


export default FilterBar;