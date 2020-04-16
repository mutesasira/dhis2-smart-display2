import React, {useEffect} from 'react';
import {Modal} from 'antd';
import {useMst} from '../../context/context';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {observer} from 'mobx-react';
import {chunk} from 'lodash'
import {VisualizationItem} from '../pages/VisualizationItem';


export const Preview = observer(() => {
  const store = useMst();

  return <Modal
    visible={store.previewing}
    onOk={store.hidePreview}
    onCancel={store.hidePreview}
    footer={null}
    closable={false}
    width="90%"
  >
    <Carousel
      arrows
      infinite>
      {chunk(store.currentPresentation.selectedItems, 2).map((dev, i) =>
        <div className="h-88" key={i}>
          <div className="flex"> {dev.map(item => <div key={item.id}>
            <VisualizationItem height={200} width={200} item={item}/>
          </div>)}
          </div>
        </div>)}
    </Carousel>
  </Modal>
})
