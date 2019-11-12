import * as React from 'react';
import styles from './Target.module.scss';
import { ITargetProps } from './ITargetProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Target extends React.Component<ITargetProps, {}> {

  public render(): React.ReactElement<ITargetProps> {
    return (  
        <div className={ styles.target }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
                  { this.props.context.microsoftTeams  && 
                    <div>
                      SPFx Component test for Teams
                    </div>
                  }
                  { !this.props.context.microsoftTeams  && 
                    <div>
                      SPFx Component test for SharePoint
                    </div>
                  } 
                <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
