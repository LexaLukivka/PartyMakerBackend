'use strcit'

class Room {

  static create(user) {
    return user.is_superadmin || user.is_active
  }

  static edit(user, room) {
    return user.is_superadmin || user.id === room.admin_id
  }

  static delete(user, place) {
    return user.is_superadmin || user.id === place.admin_id
  }
}

module.exports = Room
