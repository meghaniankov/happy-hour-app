import React from 'react';

 
function FilterBar ()  {
    return(
      <div class="Filter-Bar">
         <div class="btn-filter-custom" type="button"> <p>Price           </p> </div>
         <div class="btn-filter-custom" type="button"> <p>Neighborhood    </p> </div>
         <div class="btn-filter-custom" type="button"> <p>Days            </p> </div>
         <div class="btn-filter-custom" type="button"> <p>Deal type       </p> </div>
      </div>
    )
  }


export default FilterBar;