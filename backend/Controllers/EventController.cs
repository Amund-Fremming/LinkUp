using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace Controllers;

[ApiController]
[Route("api/event")]
public class EventController : ControllerBase
{

    public readonly IEventService _eventService;

    public EventController(IEventService eventService) {
        _eventService = eventService;
    }

    [HttpGet]
    public Task<Event?> CreateEvent(Event newEvent, string creatorUserId)
    {
        throw new NotImplementedException();
    }

    public Task DeleteEvent(int eventId)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    public async Task<Event?> GetEventByID([FromBody] int eventId)
    {
        return await _eventService.GetEventByID(eventId) ?? throw new KeyNotFoundException($"NO EVENT WITH ID {eventId} was found");
        
    }

    public Task<ICollection<Event>> GetEventsInCity(string city)
    {
        throw new NotImplementedException();
    }

    public Task<ICollection<Event>> GetUserEventsByVisibility(string visibility)
    {
        throw new NotImplementedException();
    }

    public Task<ICollection<Event>?> GetUserFriendEvents(string userId)
    {
        throw new NotImplementedException();
    }

    public Task<Event> UpdateEvent(int eventId, Event updatedEvent)
    {
        throw new NotImplementedException();
    }
}