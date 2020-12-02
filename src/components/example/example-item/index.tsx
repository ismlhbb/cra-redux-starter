import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getExampleData } from '../example.thunks';
import './index.scss';

interface Props {
  /**
   * Props 1
   */
  props1: string;
  /**
   * Props 2
   */
  props2: string;
  /**
   * Props 3
   */
  props3?: string;
}

export const ExampleItem: React.FC<Props> = ({ props1, props2, props3 }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onButtonClicked = (ev: React.MouseEvent) => {
    dispatch(getExampleData());
  };

  const onDashboardBtnClicked = (ev: React.MouseEvent) => {
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>
        {props1} {props2} {props3}
      </h1>
      <button onClick={onButtonClicked}>Get Data</button>
      <button onClick={onDashboardBtnClicked}>Dashboard</button>
    </div>
  );
};

ExampleItem.defaultProps = {
  props3: 'default string'
};
