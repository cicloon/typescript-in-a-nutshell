function bubbleSort( someArray: number[] ): number[] {
  const arrayToSort = [...someArray];
  for (let i = 0; i < arrayToSort.length; i += 1) {
    for (let j = arrayToSort.length - 1; j >= i; j -= 1) {
        if (arrayToSort[j] < arrayToSort[i]) {
            const temp = arrayToSort[i];
            arrayToSort[i] = arrayToSort[j];
            arrayToSort[j] = temp;
        }
    }
  }
  return arrayToSort;
}

// function bubbleSort2<T>( someArray: T[] ): T[] {
//   const arrayToSort: T[] = [...someArray];
//   for (let i = 0; i < arrayToSort.length; i += 1) {
//     for (let j = arrayToSort.length - 1; j >= i; j -= 1) {
//         if (arrayToSort[j] < arrayToSort[i]) {
//             const temp = arrayToSort[i];
//             arrayToSort[i] = arrayToSort[j];
//             arrayToSort[j] = temp;
//         }
//     }
//   }
//   return arrayToSort;
// }

enum HttpMethod  {
  GET = 'GET',
  POST = 'POST'
}

interface HttpRequest {
  url: string;
  method: HttpMethod;
  body: any;
}

interface BetterHttpRequest<TBody> {
  url: string;
  method: HttpMethod;
  body: TBody;
}

interface Message {
  payload: string;
  code: number;
}

export const sorting = () => {
  console.log(bubbleSort([3, 2, 7, 1, 23, 49]));
  // console.log(bubbleSort( ['b', 'd', 'x', 'a'] ));
  // console.log(bubbleSort2<string>( ['b', 'd', 'x', 'a'] ));

  const httpRequest: HttpRequest = { url: 'some url', method: HttpMethod.GET, body: 'loquesea' };

  const message = { payload: 'some payload', code: 200 };
  const httpRequest2: HttpRequest = { url: 'some url', method: HttpMethod.GET, body: message };
  console.log(httpRequest2.body.payload);

  const betterHttp: BetterHttpRequest<Message> = { url: 'some url', method: HttpMethod.GET, body: message };
  console.log(betterHttp.body.code);

  console.log(httpRequest);

};
