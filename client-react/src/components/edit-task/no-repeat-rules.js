import React from 'react'
import { editTaskStyles as styles } from './EditTaskStyle'
import { dateUtils } from '../../core'

export const getNoRepeatRules = (startDate, onChanges) => {
  return (
    <div
      style={styles.ruleRow}
      key={'no-repeat-rules'}>
      <label
        style={styles.ruleLabel}
        htmlFor='date-input'>
        {'Date:'}
      </label>
      <input
        id='date-input'
        type='date'
        style={styles.ruleInput}
        value={dateUtils.toISOString(startDate)}
        onChange={(e) => {
          onChanges({startDate: e.target.value
            ? dateUtils.fromISOString(e.target.value)
            : dateUtils.clearTime(new Date())})
        }} />
    </div>
  )
}
