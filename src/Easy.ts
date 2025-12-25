/**
 * Manage, and layout graphs on a flat plane.
 *
 * TypeScript port of Graph::Easy from the Perl Graph::Easy library
 */

import { Base } from './Base';
import { Node } from './Node';
import { Edge } from './Edge';
import { Group } from './Group';

export class Easy extends Base {
  protected debug_mode: boolean;
  protected timeout_value: number;
  protected strict_mode: boolean;
  protected class_name: string;
  protected id_value: string;
  protected groups_map: Record<string, Group>;
  protected nodes_map: Record<string, Node>;
  protected edges_map: Record<string, Edge>;
  protected output_format_value: string;
  protected _astar_bias: number;
  protected use_class_map: Record<string, string>;

  constructor(text?: string);
  constructor(args?: Record<string, any>);
  constructor(textOrArgs?: string | Record<string, any>) { throw new Error('Method not implemented: constructor'); }

  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  timeout(value?: number): number { throw new Error('Method not implemented: timeout'); }
  debug(value?: boolean): boolean { throw new Error('Method not implemented: debug'); }
  strict(value?: boolean): boolean { throw new Error('Method not implemented: strict'); }
  type(value?: string): string { throw new Error('Method not implemented: type'); }
  is_simple(): boolean { throw new Error('Method not implemented: is_simple'); }
  is_directed(): boolean { throw new Error('Method not implemented: is_directed'); }
  is_undirected(): boolean { throw new Error('Method not implemented: is_undirected'); }
  id(value?: string): string { throw new Error('Method not implemented: id'); }
  score(): number { throw new Error('Method not implemented: score'); }
  randomize(): void { throw new Error('Method not implemented: randomize'); }
  root_node(): Node | undefined { throw new Error('Method not implemented: root_node'); }
  source_nodes(): Node[] { throw new Error('Method not implemented: source_nodes'); }
  predecessorless_nodes(): Node[] { throw new Error('Method not implemented: predecessorless_nodes'); }
  label(value?: string): string { throw new Error('Method not implemented: label'); }
  link(value?: string): string { throw new Error('Method not implemented: link'); }
  parent(): any { throw new Error('Method not implemented: parent'); }
  seed(value?: number): number { throw new Error('Method not implemented: seed'); }
  nodes(): Node[] { throw new Error('Method not implemented: nodes'); }
  anon_nodes(): Node[] { throw new Error('Method not implemented: anon_nodes'); }
  edges(): Edge[] { throw new Error('Method not implemented: edges'); }
  edges_within(group?: Group): Edge[] { throw new Error('Method not implemented: edges_within'); }
  sorted_nodes(by?: string): Node[] { throw new Error('Method not implemented: sorted_nodes'); }
  add_edge_once(from: string | Node, to: string | Node, attrs?: Record<string, any>): Edge { throw new Error('Method not implemented: add_edge_once'); }
  edge(from: string | Node, to: string | Node): Edge | undefined { throw new Error('Method not implemented: edge'); }
  flip_edges(): void { throw new Error('Method not implemented: flip_edges'); }
  node(name: string): Node | undefined { throw new Error('Method not implemented: node'); }
  rename_node(oldName: string, newName: string): void { throw new Error('Method not implemented: rename_node'); }
  rename_group(oldName: string, newName: string): void { throw new Error('Method not implemented: rename_group'); }
  protected _check_class(className: string): void { throw new Error('Method not implemented: _check_class'); }
  set_attribute(name: string, value: any): void { throw new Error('Method not implemented: set_attribute'); }
  set_attributes(attrs: Record<string, any>): void { throw new Error('Method not implemented: set_attributes'); }
  del_attribute(name: string): void { throw new Error('Method not implemented: del_attribute'); }
  flow(value?: string): string { throw new Error('Method not implemented: flow'); }
  output_format(value?: string): string { throw new Error('Method not implemented: output_format'); }
  output(format?: string): string { throw new Error('Method not implemented: output'); }
  protected _class_styles(): Record<string, any> { throw new Error('Method not implemented: _class_styles'); }
  protected _skip(): boolean { throw new Error('Method not implemented: _skip'); }
  protected _remap_text_wrap(): void { throw new Error('Method not implemented: _remap_text_wrap'); }
  protected _remap_fill(): void { throw new Error('Method not implemented: _remap_fill'); }
  css(): string { throw new Error('Method not implemented: css'); }
  html_page_header(): string { throw new Error('Method not implemented: html_page_header'); }
  title(value?: string): string { throw new Error('Method not implemented: title'); }
  html_page_footer(): string { throw new Error('Method not implemented: html_page_footer'); }
  as_html_file(): string { throw new Error('Method not implemented: as_html_file'); }
  protected _caption(): string { throw new Error('Method not implemented: _caption'); }
  as_html(): string { throw new Error('Method not implemented: as_html'); }
  as_boxart(): string { throw new Error('Method not implemented: as_boxart'); }
  as_boxart_html(): string { throw new Error('Method not implemented: as_boxart_html'); }
  as_boxart_html_file(): string { throw new Error('Method not implemented: as_boxart_html_file'); }
  as_ascii(): string { throw new Error('Method not implemented: as_ascii'); }
  protected _as_ascii(): string { throw new Error('Method not implemented: _as_ascii'); }
  as_ascii_html(): string { throw new Error('Method not implemented: as_ascii_html'); }
  as_txt(): string { throw new Error('Method not implemented: as_txt'); }
  as_graphviz(): string { throw new Error('Method not implemented: as_graphviz'); }
  as_debug(): string { throw new Error('Method not implemented: as_debug'); }
  as_vcg(): string { throw new Error('Method not implemented: as_vcg'); }
  as_gdl(): string { throw new Error('Method not implemented: as_gdl'); }
  as_svg(): string { throw new Error('Method not implemented: as_svg'); }
  as_svg_file(): string { throw new Error('Method not implemented: as_svg_file'); }
  svg_information(): Record<string, any> { throw new Error('Method not implemented: svg_information'); }
  as_graphml(): string { throw new Error('Method not implemented: as_graphml'); }
  add_edge(from: string | Node, to: string | Node, attrs?: Record<string, any>): Edge { throw new Error('Method not implemented: add_edge'); }
  add_anon_node(): Node { throw new Error('Method not implemented: add_anon_node'); }
  add_node(name: string, attrs?: Record<string, any>): Node { throw new Error('Method not implemented: add_node'); }
  add_nodes(...names: string[]): Node[] { throw new Error('Method not implemented: add_nodes'); }
  copy(): Easy { throw new Error('Method not implemented: copy'); }
  protected _clone(): Easy { throw new Error('Method not implemented: _clone'); }
  merge_nodes(node1: Node, node2: Node): void { throw new Error('Method not implemented: merge_nodes'); }
  del_node(node: string | Node): void { throw new Error('Method not implemented: del_node'); }
  del_edge(edge: Edge): void { throw new Error('Method not implemented: del_edge'); }
  add_group(name: string, attrs?: Record<string, any>): Group { throw new Error('Method not implemented: add_group'); }
  del_group(group: string | Group): void { throw new Error('Method not implemented: del_group'); }
  group(name: string): Group | undefined { throw new Error('Method not implemented: group'); }
  groups(): Group[] { throw new Error('Method not implemented: groups'); }
  groups_within(group?: Group): Group[] { throw new Error('Method not implemented: groups_within'); }
  anon_groups(): Group[] { throw new Error('Method not implemented: anon_groups'); }
  use_class(type: string, className: string): void { throw new Error('Method not implemented: use_class'); }
  add_vertex(name: string, attrs?: Record<string, any>): Node { throw new Error('Method not implemented: add_vertex'); }
  add_vertices(...names: string[]): Node[] { throw new Error('Method not implemented: add_vertices'); }
  add_path(...nodes: (string | Node)[]): void { throw new Error('Method not implemented: add_path'); }
  add_cycle(...nodes: (string | Node)[]): void { throw new Error('Method not implemented: add_cycle'); }
  has_edge(from: string | Node, to: string | Node): boolean { throw new Error('Method not implemented: has_edge'); }
  set_vertex_attribute(node: string | Node, name: string, value: any): void { throw new Error('Method not implemented: set_vertex_attribute'); }
  get_vertex_attribute(node: string | Node, name: string): any { throw new Error('Method not implemented: get_vertex_attribute'); }
  animation_as_graph(): Easy { throw new Error('Method not implemented: animation_as_graph'); }
}
