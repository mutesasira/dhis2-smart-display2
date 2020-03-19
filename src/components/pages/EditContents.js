import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { observer } from 'mobx-react';
import { useMst } from '../../context/context';
import { VisualizationItem } from './VisualizationItem'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    // width: '100%',
  },
  scrollbar: {
    maxHeight: 300,
    overflow: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
}));

export const EditContents = observer(() => {
  const classes = useStyles();
  const store = useMst();
  const { currentPresentation } = store;


  return (
    <div className="h-auto px-4 -mb-16">
      <div className="flex md:flex-row flex-wrap h-full">
        <div className="w-full md:w-1/4 bg-gray border h-88 overflow-auto" >
          {currentPresentation.selectedItems.map(item => <div key={item.id} className="py-2 bg-gray-100">
            <Card className={classes.root}>
              <CardContent>
                <VisualizationItem height={120} width={120} item={item} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </div>)}
        </div>
        <div className="w-full md:w-3/4 bg-red p-4 pt-10 flex">
          <div className="py-2 w-full h-48">
            <Card>
              <CardContent>
                <p>Image</p>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});
