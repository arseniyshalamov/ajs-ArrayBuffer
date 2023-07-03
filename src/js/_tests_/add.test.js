import { ArrayBufferConverter, getBuffer } from '../add';

const converter = new ArrayBufferConverter();
const geetBuffer = new getBuffer();

test('Error buffer on load (Length)', () => {
    converter.load('kasvr');
    expect(converter.buffer.length).toBe(0);
});

test('Check Load buffer (Length)', () => {
    const bufferView = new Uint16Array(geetBuffer);
    converter.load(geetBuffer);
    expect(converter.buffer.length).toBe(bufferView.length);
});

test('Checking buffer to string', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString()).teEqual(data);
});