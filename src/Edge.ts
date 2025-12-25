/**
 * Represents one edge in a Graph::Easy graph.
 *
 * TypeScript port of Graph::Easy::Edge from the Perl Graph::Easy library
 */

import { Base } from './Base';
import { Node } from './Node';

export class Edge extends Base {
  protected from_node: Node;
  protected to_node: Node;
  protected att: Record<string, any>;
  protected cells_list: any[];
  protected start_port_value: string;
  protected end_port_value: string;

  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  bidirectional(value?: boolean): boolean { throw new Error('Method not implemented: bidirectional'); }
  undirected(value?: boolean): boolean { throw new Error('Method not implemented: undirected'); }
  has_ports(): boolean { throw new Error('Method not implemented: has_ports'); }
  start_port(value?: string): string { throw new Error('Method not implemented: start_port'); }
  end_port(value?: string): string { throw new Error('Method not implemented: end_port'); }
  style(value?: string): string { throw new Error('Method not implemented: style'); }
  name(value?: string): string { throw new Error('Method not implemented: name'); }
  _cells(): any[] { throw new Error('Method not implemented: _cells'); }
  _clear_cells(): void { throw new Error('Method not implemented: _clear_cells'); }
  protected _unplace(): void { throw new Error('Method not implemented: _unplace'); }
  protected _distance(): number { throw new Error('Method not implemented: _distance'); }
  protected _add_cell(cell: any): void { throw new Error('Method not implemented: _add_cell'); }
  from(): Node { throw new Error('Method not implemented: from'); }
  to(): Node { throw new Error('Method not implemented: to'); }
  nodes(): [Node, Node] { throw new Error('Method not implemented: nodes'); }
  start_at(node: Node): Node { throw new Error('Method not implemented: start_at'); }
  end_at(node: Node): Node { throw new Error('Method not implemented: end_at'); }
  edge_flow(): string { throw new Error('Method not implemented: edge_flow'); }
  flow(): string { throw new Error('Method not implemented: flow'); }
  port(side: string, value?: string): string { throw new Error('Method not implemented: port'); }
  flip(): void { throw new Error('Method not implemented: flip'); }
  as_ascii(): string { throw new Error('Method not implemented: as_ascii'); }
  as_txt(): string { throw new Error('Method not implemented: as_txt'); }
}
