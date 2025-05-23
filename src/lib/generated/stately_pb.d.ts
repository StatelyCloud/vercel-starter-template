// @generated by protoc-gen-es v2.0.0 with parameter "target=js+dts,import_extension=.js"
// @generated from file stately.proto (package stately.generated, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file stately.proto.
 */
export declare const file_stately: GenFile;

/**
 * @generated from message stately.generated.Link
 */
export declare type Link = Message<"stately.generated.Link"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string profile_id = 2 [json_name = "profile_id"];
   */
  profileId: string;

  /**
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * @generated from field: string url = 4;
   */
  url: string;

  /**
   * @generated from field: string emoji = 5;
   */
  emoji: string;
};

/**
 * Describes the message stately.generated.Link.
 * Use `create(LinkSchema)` to create a new message.
 */
export declare const LinkSchema: GenMessage<Link>;

/**
 * @generated from message stately.generated.Profile
 */
export declare type Profile = Message<"stately.generated.Profile"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string fullName = 2;
   */
  fullName: string;
};

/**
 * Describes the message stately.generated.Profile.
 * Use `create(ProfileSchema)` to create a new message.
 */
export declare const ProfileSchema: GenMessage<Profile>;

