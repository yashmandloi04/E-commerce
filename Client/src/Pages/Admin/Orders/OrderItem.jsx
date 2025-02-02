import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { API_PATH } from '../../../Helpers/Path';
import { BsInfoCircleFill } from "react-icons/bs";

const OrderItem = ({ index, orderItem, askDeleteHandler }) => {
  useEffect(()=>{
    // onMouseOver={() => TriggerExample(orderItem)}
    // TriggerExample(orderItem)
  }, [])
  // const TriggerExample = ()=>{
  // }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div class="d-flex align-items-start flex-column bd-highlight mb-3">
        <div className='m-1 my-2 d-flex justify-content-center'>
          <img src={`${API_PATH}/${props.product_id && props.product_id.image}`} alt="Product Image" className='img-thumbnail' style={{ height: '100px' }} />
          <p className='mx-3'>₹{props.product_id && props.product_id.price}</p>
        </div>
        <div className='m-1 my-2'>
          {props.product_id && props.product_id.name}
        </div>
        <div className='m-1 my-2'>
          {props.product_id && props.product_id.detail}
        </div>
      </div>
    </Tooltip>
  );

  return <tr>
    <td>{index + 1}</td>
    <td>{orderItem.user_id && orderItem.user_id.name}</td>
    <td>
      {orderItem.product_id && orderItem.product_id.detail}
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(orderItem)}
      >
        <Button className='mx-3 btn-sm' variant="light"><BsInfoCircleFill size={20} /></Button>
      </OverlayTrigger>
    </td>
    <td>{orderItem.cancel_status == 0 ? 'Arriving...' : orderItem.cancel_status == 1 ? 'Deliverd' : orderItem.cancel_status == 2 ? 'Canceled' : ''}</td>
    <td>{
      orderItem.cancel_status != 2
      &&
      <button data-bs-toggle='modal' data-bs-target='#delmodal' onClick={() => askDeleteHandler(orderItem)} className='btn btn-danger'>Cancel</button>
    }</td>
  </tr>
}

export default OrderItem