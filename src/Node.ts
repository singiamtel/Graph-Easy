/**
 * Represents one node in a Graph::Easy graph.
 *
 * TypeScript port of Graph::Easy::Node from the Perl Graph::Easy library
 */

import { Base } from './Base';

export class Node extends Base {
  protected name_value: string;
  protected att: Record<string, any>;
  protected class_name: string;
  protected edges_list: Record<string, any>;
  protected dx: number;
  protected dy: number;
  protected origin: Node | undefined;
  protected group_ref: any;
  protected parent_ref: any;
  protected x_coord: number;
  protected y_coord: number;

  static isa_cell: boolean = false;

  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  protected _collapse_borders(one: string, two: string, swapem: boolean): string { throw new Error('Method not implemented: _collapse_borders'); }
  protected _merge_borders(one: string, two: string): string { throw new Error('Method not implemented: _merge_borders'); }
  protected _border_to_draw(shape?: string): string { throw new Error('Method not implemented: _border_to_draw'); }
  protected _border_styles(border: string, collapse: boolean): void { throw new Error('Method not implemented: _border_styles'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
  protected _unplace(): void { throw new Error('Method not implemented: _unplace'); }
  protected _mark_as_placed(): void { throw new Error('Method not implemented: _mark_as_placed'); }
  protected _place_children(): void { throw new Error('Method not implemented: _place_children'); }
  protected _place(): void { throw new Error('Method not implemented: _place'); }
  protected _check_place(): boolean { throw new Error('Method not implemented: _check_place'); }
  protected _do_place(x: number, y: number): void { throw new Error('Method not implemented: _do_place'); }
  protected _wrapped_label(): string { throw new Error('Method not implemented: _wrapped_label'); }
  protected _aligned_label(): string { throw new Error('Method not implemented: _aligned_label'); }
  protected _extra_params(): Record<string, any> { throw new Error('Method not implemented: _extra_params'); }
  protected _convert_pod(text: string): string { throw new Error('Method not implemented: _convert_pod'); }
  protected _label_as_html(): string { throw new Error('Method not implemented: _label_as_html'); }
  quoted_comment(): string { throw new Error('Method not implemented: quoted_comment'); }
  as_html(): string { throw new Error('Method not implemented: as_html'); }
  angle(): number { throw new Error('Method not implemented: angle'); }
  protected _parent_flow_absolute(): string { throw new Error('Method not implemented: _parent_flow_absolute'); }
  flow(): string { throw new Error('Method not implemented: flow'); }
  protected _calc_size(): void { throw new Error('Method not implemented: _calc_size'); }
  protected _grow(w: number, h: number): void { throw new Error('Method not implemented: _grow'); }
  is_multicelled(): boolean { throw new Error('Method not implemented: is_multicelled'); }
  is_anon(): boolean { throw new Error('Method not implemented: is_anon'); }
  protected _un_escape(text: string): string { throw new Error('Method not implemented: _un_escape'); }
  title(value?: string): string { throw new Error('Method not implemented: title'); }
  background(value?: string): string { throw new Error('Method not implemented: background'); }
  label(value?: string): string { throw new Error('Method not implemented: label'); }
  name(value?: string): string { throw new Error('Method not implemented: name'); }
  x(value?: number): number { throw new Error('Method not implemented: x'); }
  y(value?: number): number { throw new Error('Method not implemented: y'); }
  width(value?: number): number { throw new Error('Method not implemented: width'); }
  height(value?: number): number { throw new Error('Method not implemented: height'); }
  origin(value?: Node): Node | undefined { throw new Error('Method not implemented: origin'); }
  pos(): { x: number; y: number } { throw new Error('Method not implemented: pos'); }
  offset(): { dx: number; dy: number } { throw new Error('Method not implemented: offset'); }
  columns(): number { throw new Error('Method not implemented: columns'); }
  rows(): number { throw new Error('Method not implemented: rows'); }
  size(): { w: number; h: number } { throw new Error('Method not implemented: size'); }
  shape(value?: string): string { throw new Error('Method not implemented: shape'); }
  dimensions(): { w: number; h: number } { throw new Error('Method not implemented: dimensions'); }
  edges_to(node: Node): any[] { throw new Error('Method not implemented: edges_to'); }
  edges_at_port(port: string): any[] { throw new Error('Method not implemented: edges_at_port'); }
  shared_edges(node: Node): any[] { throw new Error('Method not implemented: shared_edges'); }
  nodes_sharing_start(node: Node): any[] { throw new Error('Method not implemented: nodes_sharing_start'); }
  nodes_sharing_end(node: Node): any[] { throw new Error('Method not implemented: nodes_sharing_end'); }
  incoming(): any[] { throw new Error('Method not implemented: incoming'); }
  outgoing(): any[] { throw new Error('Method not implemented: outgoing'); }
  connections(): number { throw new Error('Method not implemented: connections'); }
  edges(): any[] { throw new Error('Method not implemented: edges'); }
  sorted_successors(): Node[] { throw new Error('Method not implemented: sorted_successors'); }
  successors(): Node[] { throw new Error('Method not implemented: successors'); }
  predecessors(): Node[] { throw new Error('Method not implemented: predecessors'); }
  has_predecessors(): boolean { throw new Error('Method not implemented: has_predecessors'); }
  has_as_predecessor(node: Node): boolean { throw new Error('Method not implemented: has_as_predecessor'); }
  has_as_successor(node: Node): boolean { throw new Error('Method not implemented: has_as_successor'); }
  relative_to(node?: Node): Node | undefined { throw new Error('Method not implemented: relative_to'); }
  find_grandparent(): any { throw new Error('Method not implemented: find_grandparent'); }
  del_attribute(name: string): void { throw new Error('Method not implemented: del_attribute'); }
  set_attribute(name: string, value: any): void { throw new Error('Method not implemented: set_attribute'); }
  set_attributes(attrs: Record<string, any>): void { throw new Error('Method not implemented: set_attributes'); }
  group(value?: any): any { throw new Error('Method not implemented: group'); }
  add_to_group(group: any): void { throw new Error('Method not implemented: add_to_group'); }
  parent(value?: any): any { throw new Error('Method not implemented: parent'); }
  protected _update_boundaries(): void { throw new Error('Method not implemented: _update_boundaries'); }
}
