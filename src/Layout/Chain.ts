/**
 * Chain layout for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Layout::Chain from the Perl Graph::Easy library
 */

export class Chain {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  start(): any { throw new Error('Method not implemented: start'); }
  end(): any { throw new Error('Method not implemented: end'); }
  add_node(node: any): void { throw new Error('Method not implemented: add_node'); }
  length(): number { throw new Error('Method not implemented: length'); }
  nodes(): any[] { throw new Error('Method not implemented: nodes'); }
  layout(): void { throw new Error('Method not implemented: layout'); }
  dump(): string { throw new Error('Method not implemented: dump'); }
  merge(chain: Chain): void { throw new Error('Method not implemented: merge'); }
}
