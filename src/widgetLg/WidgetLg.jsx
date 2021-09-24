import './WidgetLg.css';
import React from 'react'

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                        alt='roshan'
                        className='widgetLgImg'
                        />
                        <span className='widhetLgName'>Roshan Dahal</span>
                    </td>
                    <td className='widgetLgDate'>8 Feb 2021</td>
                    <td className='widgetAmount'>$158.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved'/>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                        alt='roshan'
                        className='widgetLgImg'
                        />
                        <span className='widhetLgName'>Roshan Dahal</span>
                    </td>
                    <td className='widgetLgDate'>6 Aug 2021</td>
                    <td className='widgetAmount'>$467.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined'/>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                        alt='roshan'
                        className='widgetLgImg'
                        />
                        <span className='widhetLgName'>Roshan Dahal</span>
                    </td>
                    <td className='widgetLgDate'>5 Nov 2021</td>
                    <td className='widgetAmount'>$342.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Pending'/>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                        alt='roshan'
                        className='widgetLgImg'
                        />
                        <span className='widhetLgName'>Roshan Dahal</span>
                    </td>
                    <td className='widgetLgDate'>4 May 2021</td>
                    <td className='widgetAmount'>$345.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved'/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
