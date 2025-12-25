/**
 * Grid cell node for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Node::Cell from the Perl Graph::Easy library
 */

import { Node } from '../Node';

export class Cell extends Node {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
  node(): Node { throw new Error('Method not implemented: node'); }
  as_ascii(): string { throw new Error('Method not implemented: as_ascii'); }
  as_html(): string { throw new Error('Method not implemented: as_html'); }
  group(): any { throw new Error('Method not implemented: group'); }
}
