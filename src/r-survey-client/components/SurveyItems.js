import React from 'react';
import { Link } from 'react-router-dom';

const SurveyItems = (props) => {
  const { id, name, createdAt } = props.surveyItem;
  return (
    <>
      <tbody>
        <tr>
          <td>
            <span>{id}</span>
          </td>
          <td>
            <span>
              <Link to={'/detail/' + id}>{name}</Link>
            </span>
          </td>
          <td>
            <span>{createdAt}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default SurveyItems;
