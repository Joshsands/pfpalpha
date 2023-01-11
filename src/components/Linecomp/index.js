import React from "react";
import { useState, useEffect } from "react";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex } from "rebass";
import { Switch, Button } from "evergreen-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";


export default function index({ line }) {


  function handleDelLine(e) {

console.log(line)

  }

  return (
    <div>

      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
        {/*row 1 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>

            <div className="d-flex flex-row">

              <div className="p-0 align-self-center me-1" >
                <Button margin={0} appearance="primary" intent="danger" onClick={(handleDelLine)}>
                  -</Button>
              </div>
              <div className="p-0 align-self-center me-1" >

                <Input id="device" device="device" defaultValue={line.name} />
              </div>
            </div>
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue={line.qty} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue={line.price} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue={line.price * line.qty} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue={(line.price * line.qty) * 0.3} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue={(line.price * line.qty) * 1.3} />
          </Box>
        </Flex>
      </Box>


    </div>
  );
}
