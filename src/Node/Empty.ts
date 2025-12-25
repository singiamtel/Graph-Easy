/**
 * Empty placeholder node for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Node::Empty from the Perl Graph::Easy library
 */

import { Node } from '../Node';

export class Empty extends Node {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
}
