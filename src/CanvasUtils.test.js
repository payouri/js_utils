/**
 * @jest-environment jsdom
*/

import { createDOMCanvas, CanvasView,  } from './CanvasUtils.js'

test('createDOMCanvas', () => {
    expect(createDOMCanvas()).toBeInstanceOf(HTMLCanvasElement)
});
test('new CanvasView', () => {
    expect(new CanvasView(createDOMCanvas())).toBeInstanceOf(CanvasView)
});