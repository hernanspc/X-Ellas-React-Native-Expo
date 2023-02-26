/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      following
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        following
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      isSeenBy
      messages {
        items {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        nextToken
      }
      lastMessage {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      participants {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isSeenBy
        messages {
          nextToken
        }
        lastMessage {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        following
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      type
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        following
        createdAt
        updatedAt
      }
      content
      numberOfLikes
      likedBy
      createdAt
      updatedAt
      postAuthorId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        content
        numberOfLikes
        likedBy
        createdAt
        updatedAt
        postAuthorId
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      receiver
      type
      postID
      chatRoomID
      sender {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        following
        createdAt
        updatedAt
      }
      isSeen
      createdAt
      updatedAt
      notificationSenderId
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        receiver
        type
        postID
        chatRoomID
        sender {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        isSeen
        createdAt
        updatedAt
        notificationSenderId
      }
      nextToken
    }
  }
`;
export const getUserChatRooms = /* GraphQL */ `
  query GetUserChatRooms($id: ID!) {
    getUserChatRooms(id: $id) {
      id
      userId
      chatRoomId
      user {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        following
        createdAt
        updatedAt
      }
      chatRoom {
        id
        isSeenBy
        messages {
          nextToken
        }
        lastMessage {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        chatRoom {
          id
          isSeenBy
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        content
        numberOfLikes
        likedBy
        createdAt
        updatedAt
        postAuthorId
      }
      nextToken
    }
  }
`;
export const notificationsByUserID = /* GraphQL */ `
  query NotificationsByUserID(
    $receiver: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserID(
      receiver: $receiver
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        receiver
        type
        postID
        chatRoomID
        sender {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        isSeen
        createdAt
        updatedAt
        notificationSenderId
      }
      nextToken
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        chatRoom {
          id
          isSeenBy
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          following
          createdAt
          updatedAt
        }
        chatRoom {
          id
          isSeenBy
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
