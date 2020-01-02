import React, { useState } from 'react';
import Neigborhood from './neighborhoods.component';
import { ButtonDropdown, DropdownToggle, DropdownMenu, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import Select from 'react-select'
import { render } from 'react-dom';


 
function FilterBar ()  {


  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    return(
      <div class="Filter-Bar">
         {/* <div class="btn-filter-custom" type="button"> <p>Price           </p> </div>
         <div class="btn-filter-custom" type="button"> <p>Neighborhood    </p>  </div>
         <div class="btn-filter-custom" type="button"> <p>Days            </p> </div>
         <div class="btn-filter-custom" type="button"> <p>Deal type       </p> </div> */}
         
         
         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              Neigborhood
            </DropdownToggle>
            <Form>
              <DropdownMenu>
                  <Neigborhood  />
              </DropdownMenu>
            </Form>
          </ButtonDropdown>

      </div>
      
    )
    }


export default FilterBar;
