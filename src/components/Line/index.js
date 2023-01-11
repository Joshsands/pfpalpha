import { useState, useEffect } from 'react';
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex } from "rebass";
import { Switch, Button } from 'evergreen-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faSave, faPlus } from '@fortawesome/free-solid-svg-icons'

import Linecomp from '../Linecomp'



const Line = ({ lines }) => {


    return (
        lines.map( line => {
            return <Linecomp key={line.id} line={line} />
        })

    );
  };
  
  export default Line;
