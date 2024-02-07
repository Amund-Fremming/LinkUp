using Models;

/// <summary>
/// Service Interface for all operations on Events, and fetching Events.
/// </summary>
namespace Interfaces;

public interface IEventService
{

    /// <summary>
    /// Fetches a Event by a given id.
    /// Maybe also fetch a list of users in the event
    /// </summary>
    /// <param name="eventId"></param>
    /// <returns>A Event</returns>
    Task<Event?> GetEventByID(int eventId);

    /// <summary>
    /// Fetches a list of Events based on what city you are in.
    /// </summary>
    /// <param name="city"></param>
    /// <returns>A list of Events</returns>
    Task<ICollection<Event>> GetEventsInCity(string city);

    /// <summary>
    /// Fetches a list of Events where the user has the UserRelation Friends to the creator and visibility set to friends.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns>A list of Events</returns>
    Task<ICollection<Event>?> GetUserFriendEvents(string userId);

    /// <summary>
    /// Fetches a list of Events based on what type the EventRelation is.
    /// </summary>
    /// <param name="visibility">JOINED, DECLINED, PENDING, BAILED</param>
    /// <returns>A list of Events</returns>
    Task<ICollection<Event>> GetUserEventsByVisibility(string visibility);

    /// <summary>
    /// Creates a new Event and new eventRelation and sets the userrole as CREATOR.
    /// </summary>
    /// <param name="newEvent">Event Object</param>
    /// <returns>Newly created Event<returns>
    Task<Event?> CreateEvent(Event newEvent);

    /// <summary>
    /// Updates a Event.
    /// </summary>
    /// <param name="updatedEvent">Event Object</param>
    /// <returns>Updated Event<returns> 
    Task<Event> UpdateEvent(int eventId, Event updatedEvent);

    /// <summary>
    /// Deletes a Event.
    /// </summary>
    /// <param name="eventId"></param>
    Task DeleteEvent(int eventId);
}