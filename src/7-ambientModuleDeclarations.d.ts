declare module 'redux-polyglot' {
  export interface PolyglotScopeVars {
   [varName: string]: string | number;
  }
  export type translate = (scope: string, vars: PolyglotScopeVars) => string;

  interface SimpleAction {
    type: string,
    payload: {
      [varName:string]: any
    }
  }

  export type getLocaleFunction = ( action: SimpleAction ) => string;
  export type getPhrasesFunction = (locale: string) => Promise<any>;

  interface TranslateFunctions {
    t: translate,
    tc: translate,
    tm: translate,
    tu: translate,
  }

  export function getP(scope: string): TranslateFunctions;
  export function createPolyglotMiddleware(actionsToCatch: [string], getLocale: getLocaleFunction, getPhrases: getPhrasesFunction ): any;
}
