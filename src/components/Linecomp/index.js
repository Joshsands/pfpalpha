import React from "react";
import { useState, useEffect } from "react";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex } from "rebass";
import { Switch, Button } from "evergreen-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";


export default function index({ line }) {
  return (
    <div>
      {line.name}
      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
        {/*row 1 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Label htmlFor="device">Device</Label>


                <Input id="device" device="device" defaultValue="Design" />

          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="qty">QTY</Label>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="price">Price</Label>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="subtotal">Subtotal</Label>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="markup">Mark-up</Label>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="total">Total</Label>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
